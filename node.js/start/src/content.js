const Content = () => {
    const handleNameChange = () => {
        const names =['Tom','Bob','Tosh'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
     }

     const handleClick = () =>{
        console.log('you clicked it')
     }


     const handleClick2 = (name) =>{
        console.log('${name} was clicked')
     }
    
     return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={() => handleClick2('Tosh')}>Click It</button>

        </main>
     )
}

export default Content