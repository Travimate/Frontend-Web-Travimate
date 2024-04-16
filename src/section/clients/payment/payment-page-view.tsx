import * as Yup from 'yup';
import { useCallback, useMemo, useState } from "react";
import CardPayment from "./card-payment";
import WaitingPayment from "./waiting-payment";
import PaymentAccepted from "../payment-accepted";
import PilihMetode from "./payment-method";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';
import { CounterState, selectAccessToken } from '../../../store/clients/client.slice';
import { selectCheckoutData, selectDataFlighState, selectQueryFlighState } from '../../../store/flights/flights.slice';
import travimatev2 from '../../../api/tavimatev2';


interface IPaymentData {
  no_card: string;
  expired_card: string;
  no_cv: string;
  name_card: string;
  payment_select: string;
  payment_method: string;
  promo_code: string;
}

export type PaymentDataKey = keyof IPaymentData;

const PaymentPageView = () => {
  const [step, setStep] = useState<number>(1);

  const dataClient = useSelector((state: { client: CounterState }) => state?.client?.profileClient)
  const dataDetailFlight = useSelector(selectDataFlighState)
  const dataQueryFlight = useSelector(selectQueryFlighState)
  const dataCheckoutFlight = useSelector(selectCheckoutData)
  const accessToken = sessionStorage.getItem('at')

  const totalFare = dataDetailFlight?.flights?.map((item:any)=>item?.baseFare?.adultBaseFare)?.reduce((a:any, b:any)=>a + b, 0)

  console.log(dataCheckoutFlight)

  const PaymentSchema = Yup.object().shape({
      no_card: Yup.string().required('Number card is required'),
      expired_card: Yup.string().required('Expired is required'),
      no_cv: Yup.string().required('CVC number is required'),
      name_card: Yup.string().required('Name card is required'),
      payment_select: Yup.string().nullable() , // .required('Payment select is required'),
      payment_method: Yup.string().nullable(), // .required('Payment select is required'),
      promo_code: Yup.string().nullable(),
  });

  const defaultValues = useMemo(
    () => ({
        no_card: '',
        expired_card: '',
        no_cv: '',
        name_card: '',
        payment_select: '',
        payment_method: '',
        promo_code: ''
      }),
    []
  );

  const methods = useForm({
      resolver: yupResolver(PaymentSchema),
      defaultValues,
  });


  const {
      reset,
      watch,
      control,
      setValue,
      handleSubmit,
      formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  const handleSetValueInput = useCallback(({key, values}: {key: PaymentDataKey, values: any})=>{
    setValue(key, values)
  },[defaultValues])

  console.log(values)

  const onSubmit = handleSubmit(async (data) => {
    setStep(2)
    
    const payloadForm = {
      bookedBy: "fajar",
      bookedMail: "fa314270@gmail.com",
      flightDataID: "7295cebf-047e-4904-974f-f42e5135b248",
      flightID: ["8767bed7-69ec-48fd-9d38-54b5bb7764d1"],
      passengerList: [
        {
          "greeting": "Mrs.",
          "firstName": "Syafa",
          "lastName": "Annisa",
          "type": "adult"
        },
        {
          "greeting": "Miss",
          "firstName": "Sheilla",
          "lastName": "Amira",
          "type": "child"
        },
            {
          "greeting": "Miss",
          "firstName": "Syahnaz",
          "lastName": "Olivia",
          "type": "child"
        }
      ]
    }

    try {
        travimatev2.post(``, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(()=>{

        }).catch((error)=>{
          console.log(error)
        })

    } catch (error) {
      
    }
  })

  return (
    <div className="">
      <div className="flex justify-between mt-32 px-36 pb-6">
        <PilihMetode step={step} changeStep={(e: number) => setStep(e)} />
      </div>
      <Form {...methods}>
        <form onSubmit={onSubmit}>
          {step === 1 && <CardPayment values={values} handleSetValueInput={handleSetValueInput} onSubmit={onSubmit} />}
        </form>
      </Form>
      {step === 2 && <WaitingPayment />}
      {step === 3 && <PaymentAccepted />}
      <button onClick={()=>handleSetValueInput({
        key: 'no_card',
        values: '01'
      })}>
      </button>
    </div>
  );
};

export default PaymentPageView;

