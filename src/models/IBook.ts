export interface BookQuery {
  title: string
  author: string
  type: string
  press: string
  isbnIssn: string
}

export interface BookInformation {
  id: number
  bookId: string
  borrowTimes: number
  borrowNumber: number
  title: string
  image: string
  category: string
  type: string
  author: string
  press: string
  isbnIssn: string
  number: number
  publicDate: string
  status: string
  updateTime: string
  description: string
  directory: Directory
}

export interface Directory {
  id: number
  chapterNumber: string
  sectionNumber: string
  chapterName: string
  chapterContent: string
}
