export interface IRouterRecord {
  id: string
  name: string
  icon: any
  title: string
  path?: string
  isLeaf: boolean
  noLeaf?: boolean
  children: IRouterRecord[]
}
