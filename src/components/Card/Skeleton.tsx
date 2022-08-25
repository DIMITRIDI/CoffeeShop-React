import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
   <ContentLoader 
      speed={2}
      width={320}
      height={553}
      viewBox="0 0 320 553"
      backgroundColor="#f3f3f3"
      foregroundColor="#ede2d9"
   >
      <rect x="0" y="0" rx="0" ry="0" width="320" height="336" /> 
      <rect x="20" y="375" rx="0" ry="0" width="280" height="42" /> 
      <rect x="283" y="20" rx="0" ry="0" width="33" height="33" /> 
      <rect x="20" y="439" rx="0" ry="0" width="90" height="33" /> 
      <rect x="115" y="439" rx="0" ry="0" width="90" height="33" /> 
      <rect x="210" y="439" rx="0" ry="0" width="90" height="33" /> 
      <rect x="179" y="489" rx="0" ry="0" width="122" height="42" /> 
      <rect x="18" y="491" rx="0" ry="0" width="90" height="40" />
   </ContentLoader>
)

export default Skeleton;