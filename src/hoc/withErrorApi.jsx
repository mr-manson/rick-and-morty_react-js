import { useState } from "react";
import Error404 from "../components/ErrorPage";

export const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = useState(false);

        return (
            <>
                {errorApi
                    ? <Error404/>
                    : <View
                        setErrorApi={setErrorApi}
                        {...props}
                    />
                }
            </>
        );
    }
};

export default withErrorApi;


