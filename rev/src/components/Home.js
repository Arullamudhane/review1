import './Home.css';
import proof1 from '../assets/s1.jpg';
export default function Home() {
    return (<>
        <div className="top-margin"></div>

        <div className='title'>
            <b>REVIEW OF   VFIBERNET SERVICE KARAIKAL</b>
        </div>
        <div className="top-margin"></div>
        <div className='container'>
            <p>This is my experience with an Internet Service Provider in Karaikal. Based on the reviews from Google, I contacted Mr. Ahamed Kabir and set up the service in my home. Some individuals in Karaikal manage the local connections as the main person is in Pondicherry.</p>

            <p>Initially, the connection was really good, but after some time, it started breaking frequently. A local person named Rohith helped me set it up again, but the connection issues persisted. In November, the connection broke again, and despite informing the responsible individuals, no actions were taken by vfibernet. I called them daily, but there was no response. Rohith showed up once and fixed it, but it broke again the next day. It's been three months since the issue started, and despite promises to fix it daily, there has been no resolution. The person responsible claims they will fix it today, but it has been three months, and they are not even answering calls now. Clearly, I made the wrong decision by choosing this service, given the lack of customer response.</p>

            <p>I've been trying to reach both Ahamed Kabir and Rohith, but neither of them has been reachable for the past four days, even though their phone lines seem busy when I check. I have attached an image below, which the company representative sent to me, illustrating how many days out of the past three months I have had a stable connection.</p>

            <p>While I would like to share my call history and chat history, I believe it's not the most professional approach. I simply want to express my disappointment and urge the service provider not to treat customers this way. I have incurred a notable financial loss due to this connection issue.</p>

            <p><b>NOTE: I understand issue happens anytime, that's why i haven't troubled you and waiter for last 3 months, but you are continously giving false hope and not doing it. Atleast a simple phone call should help the customer. </b> </p>

        </div>
        <div className='img'>
            <img src={proof1} />
        </div>
        <div className='footer'></div>

    </>);

}