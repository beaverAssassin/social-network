import React from 'react';




  const isIEHoc = (WrappedComponent)=>{
      var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);


      return(props)=>{
        return (
            <div>
            <WrappedComponent  isChrome ={isChrome} {...props}/>

            </div>
        )
    }
}
export default isIEHoc;