import { useRouter } from "next/router"
import { useEffect } from "react";


const pageNo = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const value = router.query.pageNo;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setTimeout(() => {

            router.push('/')
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>
                i am {value}
            </h1>

        </>
    )
}

export default pageNo
