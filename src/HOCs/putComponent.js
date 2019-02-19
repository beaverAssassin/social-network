import React from 'react';

  const putToTemplate1 = (WrappedComponent) => {

    return (props) => {

        return (
            <>

                <header>Logo,login</header>
                <aside>Sidebar</aside>
                <main><WrappedComponent {...props}/>    </main>

                <footer>footer</footer>
            </>
        )

    }


}

export default putToTemplate1;
