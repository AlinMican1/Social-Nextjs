

type AlertProps = {
    children: React.ReactNode
}

const ErrorAlert = ({children}: AlertProps) =>{
    return(
        <div>
            {children}
        </div>
    )
}
export {ErrorAlert}