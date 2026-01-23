export default interface FilteringProps {
  values: {[key: string]: number}
  onChange: (value: string) => void
  buttonText: string
  buttonAction: () => void
  active: string[]
}
