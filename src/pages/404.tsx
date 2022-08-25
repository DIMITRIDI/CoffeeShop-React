import { Link } from "react-router-dom";

const Page404: React.FC = () => {
   return (
      <div className="mainbox">
         <div className="wrapper">
            <div className="err">404</div>
            <div className="msg">Maybe this page moved?<br />Got deleted?<br />Is hiding out in quarantine?<br />Never existed in the first place?<br />Let's go<Link to="/">home</Link>and try from there.</div>
         </div>
      </div>
   )
}

export default Page404;