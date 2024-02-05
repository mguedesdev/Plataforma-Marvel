import { AlertContainer } from './AlertLoginStyles'

interface AlertLoginProps {
  alert: string,
  showAlert: boolean
  sucess: boolean
}

function AlertLogin({alert, showAlert, sucess}: AlertLoginProps) {
  return (
    <>
      {
        showAlert ?
        <AlertContainer sucess={sucess}>{alert}</AlertContainer> : null
      }
    </>
  )
}

export default AlertLogin