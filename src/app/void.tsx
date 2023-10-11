type VoidProps = {
  size:
    | 2
    | 4
    | 6
    | 8
    | 10
    | 12
    | 14
    | 16
    | 20
    | 24
    | 32
    | 36
    | 48
    | 52
    | 64
    | 72
    | 96;
};

export function Void({ size }: VoidProps) {
  return <div style={{ paddingTop: size * 4 }} />;
}
