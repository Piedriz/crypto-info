import React from 'react'

export const useModal = () => {
const [modalInfo, setModalInfo]= React.useState(null);

  return {modalInfo,setModalInfo}
}
