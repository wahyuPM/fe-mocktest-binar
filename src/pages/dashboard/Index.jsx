import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth-context";

import Product from "../../components/product/Index";

const Dashboard = () => {
    const authCtx = useContext(AuthContext);
    const [data, setData] = useState([]);

    const getData = () => {
        const base_url = process.env.REACT_APP_API_HOST;
        const url = `${base_url}/v1/products`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authCtx.token}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'failed get data!';
                    throw new Error(errorMessage);
                });
            }
        }).then((data) => {
            setData(data.result);
        }).catch((err) => {
            alert(err.message);
        })
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authCtx.isLoggedIn])

    return (
        <div className="container mx-auto h-full overflow-auto scroll mb-5">
            <div className="pb-8 mx-2">
                <div className="grid grid-cols-6 grid-flow-dense gap-4 h-max ">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="col-span-2">
                                <Product data={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Dashboard;