
import { useRouter } from 'next/router'
const blogs = () => {
    const router = useRouter();
    const contentNo = router.query.blogs


    return (
        <div>
            <h1> Hello motilal {contentNo}</h1>
        </div>
    )
}
export default blogs