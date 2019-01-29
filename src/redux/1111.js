class App extends Component {

    render() {
        // debugger;
        return (
            <div>
                <Route path="/" exact render={() => <Login/>}/>
                <Route path="/Profile" render={() => {
                    return <ProfilePage/>


                }
                }


                <Route path="/dialogs" render={() => <DialogsBoss/>}/>
                <Route path="/news" render={() => <BossNews/>}/>
                <Route path="/music" render={() => <MusicBoss/>}/>
                <Route path="/setings" render={() => <SetingsBoss/>}/>
            </div>
        );
    }
}

export default App;