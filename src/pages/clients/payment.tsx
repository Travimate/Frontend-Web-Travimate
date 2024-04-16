import React from 'react'
import PaymentPageView from '../../section/clients/payment/payment-page-view'
import LayoutClient from '../../components/layout-clients/layout'
import { useSelector } from 'react-redux'
import { CounterState } from '../../store/clients/client.slice'

const Payment = () => {

  const dataClient = useSelector((state: { client: CounterState }) => state?.client?.profileClient)

  return (
    <LayoutClient dataClient={dataClient} >
        <PaymentPageView/>
    </LayoutClient>
  )
}

export default Payment