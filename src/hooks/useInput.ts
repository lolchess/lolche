import { ChangeEventHandler, useState } from "react";

export default function useInput(
  init: string
): [string, (text: string) => void, ChangeEventHandler<HTMLInputElement>] {
  const [input, setInput] = useState<string>(init);

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput(e.target.value);
  };

  return [input, setInput, onChangeInput];
}
