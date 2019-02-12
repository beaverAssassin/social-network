import React from 'react';

  const putToTemplate1 = (WrappedComponent) => {

    return (props) => {

        return (
            <div>

                <header>Logo,login</header>
                <aside>Sidebar</aside>
                <main><WrappedComponent {...props}/>    </main>

                <footer>footer</footer>
            </div>
        )

    }


}

export default putToTemplate1;
