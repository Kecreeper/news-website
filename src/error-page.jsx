import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return(
        <div className="w-screen grid place-content-center text-center">
            oops
            <i>{error.statusText || error.message}</i>
        </div>
    )
}