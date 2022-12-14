

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <div>
             <Suspense fallback={<div>Loading...</div>}>
                <Routes>
               
                    {routeConfig.map(({path, element}) => {
                       return  <Route key={path} path={path} element={element}/>
                    })}
                </Routes>
            </Suspense>
        </div>
    );
};

