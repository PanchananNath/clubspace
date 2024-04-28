"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useUid } from "./id";

interface EmailAndNameContextType {
  id: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
}

const EmailAndNameContext = createContext<EmailAndNameContextType>({
  id: null,
  firstname: null,
  lastname: null,
  email: null,
});

export const EmailAndNameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [id, setid] = useState<string | null>(null);
  const [firstname, setfirstname] = useState<string | null>(null);
  const [lastname, setlastname] = useState<string | null>(null);
  const [email, setemail] = useState<string | null>(null);
  //const [dataFetched, setDataFetched] = useState(false);
  const { uid } = useUid();

  useEffect(() => {
    //console.log("uid: ",uid);
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/getdata?id=${uid}`,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const jsonData = await response.json();
          if (jsonData.length > 0) {
            console.log("response: ", jsonData[0].id);
            console.log("firstname: ", jsonData[0].firstname);
            const {id, firstname, lastname, email } = jsonData[0];
            setid(id);
            setfirstname(firstname);
            setlastname(lastname);
            setemail(email);
            //setDataFetched(true);
          }
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (uid) {
      fetchdata();
    }
  }, [uid]);

  return (
    <EmailAndNameContext.Provider value={{ id, firstname, lastname, email }}>
      {children}
    </EmailAndNameContext.Provider>
  );
};

export const useEmailAndName = (): EmailAndNameContextType =>
  useContext(EmailAndNameContext);
