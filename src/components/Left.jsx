import React from "react";

const Left = ()=>{
    return(
        <section className="left">
            <div className="logo"></div>
            <div className="infContainer"><p>?</p></div>
            <h1 className="tituloForm">Fazer Login</h1>
            <form action="" method="post" className="formContainer">
                <input className="inputUser" type="text" placeholder="Login"/>
                <input className="inputUser" type="password" placeholder="Senha"/>
                <div className="checkLabel">
                    <input type="checkbox" name="salvarSenha" id="salvarSenha" />
                    <label className="fraseCheck" htmlFor="salvarSenha">Manter Login</label>
                </div>
            </form>
            <input className="buttonIniciar" type="button" value="" />

        </section>
    );
}

export default Left;