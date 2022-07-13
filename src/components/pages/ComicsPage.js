import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import SingleComicPage from "./SingleComicPage";

const ComicsPage = () => {

    return (
        <>
            <AppBanner/>
            <Routes>
            <Route>
                {/* <Route path=":id" element={<SingleComicPage/>}/> */}
                <Route path="/" element={<ComicsList/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default ComicsPage;