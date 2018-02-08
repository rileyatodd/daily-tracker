export function getFormValues(e: React.FormEvent<HTMLFormElement>): {[name: string]: string} {
  e.preventDefault();
  let inputs: HTMLInputElement[] = Array.prototype.slice.call(
    (e.target as HTMLElement).querySelectorAll('input')
  )
  return inputs.reduce((acc, input) => ({...acc, [input.name]: input.value}), {})
}

export function log<T>(x: T): T {
  console.log(x);
  return x;
}