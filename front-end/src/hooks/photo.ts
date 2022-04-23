import { gql, useMutation, useQuery } from '@apollo/client'

export type Photo = {
  label: string
  url: string
}

const GET_PHOTOS = gql`
  query getPhotos($position: Float!, $size: Float!) {
    photos(position: $position, size: $size) {
      label
      url
    }
  }
`

const ADD_PHOTO = gql`
  mutation createPhoto($photo: AddPhotoDto!) {
    addPhoto(photo: $photo) {
      label
      url
    }
  }
`

export const size = 18

export const useFetchPhotos = ({ position }: { position: number }) => {
  return useQuery(GET_PHOTOS, {
    variables: { position, size },
  })
}

export const useAddPhoto = () => {
  return useMutation(ADD_PHOTO)
}
