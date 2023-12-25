type VoidProps = {
  gap:
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

export function Void({ gap }: VoidProps) {
  return <div style={{ paddingTop: gap * 4 }} />;
}
