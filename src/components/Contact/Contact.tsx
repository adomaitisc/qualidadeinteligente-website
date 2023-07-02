import { useEffect, useState } from "react";

const Contact = () => {
  return (
    <section className="md:h-[700px] w-screen flex flex-row justify-center items-center">
      <div className="flex flex-col md:w-[60%] w-full items-center justify-center gap-8">
        <Text />
        <Content />
      </div>
    </section>
  );
};

const Text = () => {
  return (
    <div className="md:ml-8 md:self-start max-w-[80%]">
      <p className=" uppercase font-medium text-base text-zinc-500">
        Faça parte do nosso sucesso
      </p>
      <div className="md:mt-4 mt-6"></div>
      <h1 className="md:text-6xl text-3xl text-zinc-100 font-bold">
        Fale com a gente!
      </h1>
      <div className="md:mt-9 mt-6"></div>
      <p className="md:text-xl text-lg text-zinc-300 font-light leading-relaxed">
        Escreva-nos uma mensagem e entraremos em contato o mais breve possível.
      </p>
    </div>
  );
};

const Content = () => {
  const defaultValues = {
    company: "",
    email: "",
    name: "",
    phone: "",
    size: "",
    needs: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] = useState(defaultValues);
  const [modalStatus, setModalStatus] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validateInputs(formValues));
    console.log(formValues);
    console.log(defaultValues);
    if (
      JSON.stringify(formErrors) === JSON.stringify(defaultValues) &&
      JSON.stringify(formValues) !== JSON.stringify(defaultValues)
    ) {
      let status = await requestMail(formValues);
      openModal(status);
    }
  };

  const requestMail = async (data: any) => {
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
    if (json.message === "error") {
      return "error";
    }
    return "success";
  };

  const openModal = (status: string) => {
    setModalStatus(status);
    setIsOpen(true);
  };

  const validateInputs = (values: any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let errors = { ...defaultValues };
    // Validates company
    if (values.company === "") {
      errors.company = "O nome da empresa é obrigatório!";
    } else if (values.company.length < 3) {
      errors.company = "O nome da empresa deve conter ao menos 3 caracteres!";
    }
    // Validates email
    if (values.email === "") {
      errors.email = "O email é obrigatório!";
    } else if (!regex.test(values.email)) {
      errors.email = "Este email não é válido!";
    }
    // Validates name
    if (values.name === "") {
      errors.name = "O nome é obrigatório!";
    } else if (values.name.length < 3) {
      errors.name = "O nome deve conter ao menos 3 caracteres!";
    }
    // Validates phone
    if (values.phone === "") {
      errors.phone = "O número de celular é obrigatório!";
    } else if (values.phone.length < 10 || values.phone.length > 13) {
      errors.phone = "Este número de celular não é válido!";
    }
    // Validates size
    if (values.size === "select" || values.size === "") {
      errors.size = "O tamanho da empresa é obrigatório!";
    }
    // Validates needs
    if (values.needs === "select" || values.needs === "") {
      errors.needs = "A necessidade é obrigatória!";
    }
    // Validates message
    if (values.message.length > 120) {
      errors.message = "A mensagem deve conter no máximo 120 caracteres!";
    }
    return errors;
  };

  return (
    <form
      className="w-full flex flex-col px-8 md:gap-0 gap-2"
      onSubmit={handleSubmit}
    >
      <div className="flex md:flex-row flex-col w-full justify-center md:gap-4 gap-2">
        <FormInput
          type="text"
          id="company"
          label="Empresa"
          onChange={handleChange}
          error={formErrors.company}
          value={formValues.company}
        />
        <FormInput
          type="email"
          id="email"
          label="Email"
          onChange={handleChange}
          error={formErrors.email}
          value={formValues.email}
        />
      </div>
      <div className="flex md:flex-row flex-col w-full justify-center md:gap-4 gap-2">
        <FormInput
          type="text"
          id="name"
          label="Nome Completo"
          onChange={handleChange}
          error={formErrors.name}
          value={formValues.name}
        />
        <FormInput
          type="text"
          id="phone"
          label="Celular"
          onChange={handleChange}
          error={formErrors.phone}
          value={formValues.phone}
        />
      </div>
      <div className="flex md:flex-row flex-col w-full justify-center md:gap-4 gap-2">
        <FormInput
          type="select"
          id="size"
          label="Número de Funcionários"
          options={["5 - 20", "até 50", "50 ou mais", "100 ou próximo"]}
          onChange={handleChange}
          error={formErrors.size}
          value={formValues.size}
        />
        <FormInput
          type="select"
          id="needs"
          label="Qual a sua Necessidade?"
          options={["Auditorias Internas", "PBQP-H", "NBR 15.575", "ISO 9.001"]}
          onChange={handleChange}
          error={formErrors.needs}
          value={formValues.needs}
        />
      </div>
      <div className="flex w-full justify-center gap-4">
        <FormInput
          type="textarea"
          id="message"
          label="Mensagem"
          onChange={handleChange}
          error={formErrors.message}
          value={formValues.message}
        />
      </div>
      <div className="flex mt-2">
        <button className="text-zinc-200 px-4 py-2.5 rounded-lg bg-blue-700 md:text-sm text-xl font-medium duration-200 hover:bg-blue-400/70">
          Solicitar Contato →
        </button>
        <Modal
          title="Muito Obrigado!"
          fLine="A QI agradece o seu contato!"
          sLine="Nossa equipe entrará em contato o mais breve possível para alinhar ideias e garantir a certificação e a qualidade da sua Empresa."
          isOpen={isOpen}
          close={() => setIsOpen(false)}
          status={modalStatus}
        />
      </div>
    </form>
  );
};

type FormInputProps = {
  type: string;
  id: string;
  label: string;
  options?: string[];
  onChange?: (e: any) => void;
  error: string;
  value: string;
};

const FormInput = ({
  type,
  id,
  label,
  options,
  onChange,
  error,
  value,
}: FormInputProps) => {
  switch (type) {
    case "select":
      return (
        <div className="mb-4 w-full">
          <label
            className="block mb-2 md:text-sm text-base font-light text-zinc-400"
            htmlFor={id}
          >
            {label}
          </label>
          <select
            className=" appearance-none bg-zinc-900 border border-zinc-800 text-zinc-500 md:text-sm text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name={id}
            onChange={onChange}
            defaultValue={value}
          >
            <option className="text-zinc-500" value={value} disabled hidden>
              Selecione →
            </option>
            {options!.map((option: any, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className="text-red-500 text-sm italic">{error}</p>
        </div>
      );
    case "textarea":
      return (
        <div className="mb-4 w-full">
          <label
            className="block mb-2 md:text-sm text-base font-light text-zinc-400"
            htmlFor={id}
          >
            {label}
          </label>
          <textarea
            className="bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 md:text-sm text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            id={id}
            name={id}
            placeholder={label}
            onChange={onChange}
            value={value}
          />
          {error && <p className="text-red-500 text-sm italic">{error}</p>}
        </div>
      );
    default:
      return (
        <div className="mb-4 w-full">
          <label
            className="block mb-2 md:text-sm text-base font-light text-zinc-400"
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className="bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 md:text-sm text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            type={type}
            id={id}
            name={id}
            placeholder={label}
            onChange={onChange}
            value={value}
          />
          {error && <p className="text-red-500 text-sm italic">{error}</p>}
        </div>
      );
  }
};

type ModalProps = {
  title: string;
  fLine: string;
  sLine: string;
  isOpen: boolean;
  close: () => void;
  status: string;
};

const Modal = ({ title, fLine, sLine, isOpen, close, status }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        close();
      }, 10000);
    }
  }, [isOpen, close]);

  if (status === "error") {
    title = "Ocorreu um erro!";
    fLine = "Houve um erro ao processar a sua solicitação.";
    sLine =
      "Por favor, tente novamente mais tarde ou entre em contato pelo e-mail ou telefone presentes no rodapé.";
  }
  return (
    <div
      className={`${
        !isOpen && `hidden`
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-10 w-full flex justify-center items-center bg-zinc-900/70`}
    >
      <div className="relative p-4 w-1/4 max-w-2xl h-full md:h-auto">
        <div className="relative bg-zinc-900 rounded-lg shadow">
          <div className="flex justify-between items-start p-4 rounded-t border-b border-zinc-800">
            <h1 className="pt-1 text-xl font-semibold text-zinc-300">
              {title}
            </h1>
            <button
              type="button"
              className="text-zinc-400 bg-transparent hover:bg-zinc-600 hover:text-zinc-100 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={close}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base font-light leading-relaxed text-zinc-400">
              {fLine}
            </p>
            <p className="text-base font-light leading-relaxed text-zinc-400">
              {sLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
