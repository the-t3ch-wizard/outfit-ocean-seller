import { atom } from "recoil";

export const loadingStatus = atom({
  key: "loadingStatusAtom",
  default: true
})

export const sellerId = atom({
  key: "sellerIdAtom",
  default: ''
})

export const productsAtom = atom({
  key: "productsAtom",
  default: []
})