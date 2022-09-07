import "./LandingV2.css";
import SocialLinksVertical from "../UI/SocialLinksVertical";

const LandingV2 = (props) => {
    let content = {
        English: {
            morning : "Good Morning",
            afternoon : "Good Afternoon",
            evening : "Good Evening",
          
        },
        Japanese: {
            morning : "おはようございます",
            afternoon : "こんにちは",
            evening : "こんばんは",
          
        },
      };
    
      props.language === "Japanese"
        ? (content = content.Japanese)
        : (content = content.English);


    // find if the user is in the morning, afternoon, or evening
    const time = new Date().getHours();
    let currGreeting = "Hello";
    if (time < 12) {
        currGreeting = content.morning;
    } else if (time < 18) {
        currGreeting =  content.afternoon;
    } else {
        currGreeting =  content.evening;
    }


    return (
        <div className="landing-v2">

        
          
                    <h1 className="landing-v2-title">
                        <span>{`${currGreeting}`}, I'm </span>
                        <span style={{

color : "var(--secondary-color)"
                        }}>Zach</span>
                        <span> and I build </span>
                        <span style ={{
                            color : "var(--secondary-color)" }
                        }> web applications</span>
                        {/* <span> and </span>
                        <span style ={{
                            color :"#F5A623" }
                        }> mobile apps</span> */}
                        <span>.</span>
                    </h1>
                    <SocialLinksVertical />
      
        </div>
    );
}



export default LandingV2