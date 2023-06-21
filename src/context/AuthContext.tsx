import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'
export const AuthContext = createContext({});

export const AuthProviderContext = ({ children }: { children: React.ReactNode } ) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const [isUser, setIsUser] = useState<any>('')

  function getCookieValue(cookieName:any) {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
      const [name, value] = cookies[i].split("=");

      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }

    return undefined; // Cookie not found
  }

  const token = getCookieValue("_auth");



  const checkIsAuthenticated = () => {
    if(token) {
      setIsAuthenticated(true)
      console.log("Token:", token);
      // Split the JWT into its three parts: header, payload, and signature
      const [encodedHeader, encodedPayload, encodedSignature] = token.split(".");

      // Decode the Base64 encoded header and payload
      const decodedHeader = JSON.parse(atob(encodedHeader));
      const decodedPayload = JSON.parse(atob(encodedPayload));

      console.log("Decoded Header:", decodedHeader);
      console.log("Decoded Payload:", decodedPayload);

      const fetchEvents = async () => {
        try {
          const response = await fetch(`http://localhost:3000/events/list/${decodedPayload.companyID}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (response.ok) {
            const json = await response.json();
           
              console.log('json: ', json);
              
              setIsUser(decodedPayload.email)
           
           
          } else {
            console.log('Error:', response.status);
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };

      fetchEvents();
      
     
    } else {
      setIsAuthenticated(false)
    }
  }

  useEffect(() => {
    checkIsAuthenticated()
  }, [])

  useEffect(() => {
    if (token) {
      console.log("Token:", token);
      // Split the JWT into its three parts: header, payload, and signature
      const [encodedHeader, encodedPayload, encodedSignature] = token.split(".");

      // Decode the Base64 encoded header and payload
      const decodedHeader = JSON.parse(atob(encodedHeader));
      const decodedPayload = JSON.parse(atob(encodedPayload));

      console.log("Decoded Header:", decodedHeader);
      console.log("Decoded Payload:", decodedPayload);

      const fetchEvents = async () => {
        try {
          const response = await fetch(`http://localhost:3000/events/list/${decodedPayload.companyID}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (response.ok) {
            const json = await response.json();
           
              console.log('json: ', json);
              
              setIsUser(decodedPayload.email)
           
           
          } else {
            console.log('Error:', response.status);
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };

      fetchEvents();
    } else {
      console.log("Token cookie not found.");
    }
    console.log("isAuthenticated: ", isAuthenticated)
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isUser, setIsUser, checkIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
function getCookieValue(arg0: string) {
  throw new Error('Function not implemented.');
}

