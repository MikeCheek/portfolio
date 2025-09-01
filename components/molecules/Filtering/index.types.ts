export default interface FilteringProps {
  values: {[key: string]: number}
  onChange: (value: string) => void
  clearAll: () => void
  active: string[]
}
