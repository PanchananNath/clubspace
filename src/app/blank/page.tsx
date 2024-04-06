import { sql } from "@vercel/postgres";

export default async function BlankPage() {

    try {
        sql`insert into users (id, firstname, lastname, institute_id, department_id, linkedin, phone) values('jfa;g;afja', 'Monalisha', 'Roy', 1, 1, 'https://www.linkedin.com/in/monalisha-roy-995978252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '7896679168')`;
      }catch(error){
        console.error('couldnt insert data: ', error);
        window.alert('couldnt insert data');
      }

    return(
        <main className="bg-white flex justify-center items-center">
            <h1>Hello!</h1>
        </main>
    );
}