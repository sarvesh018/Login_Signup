import React from "react";

function Login(){
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="px-20 py-10 bg-[#e3e3e3] shadow-2xl rounded-xl">
                <h1>Login Page</h1>
                <div>
                    <form action="">
                        <div className="gap-5">
                            <label htmlFor="username">Username:</label>
                            <input type="text" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;