import './Cars.css'
import next from './docs/chevron-small.svg'
const Cars=({ditails})=>{

    return(
        <div className="CarCard">
            <span className='Name'>{ditails.bodyType}</span>
            <br/>
            <span className='model'> {ditails.modelName}</span>

            <span className='type'> {ditails.modelType}</span>
            <img src={require(`${ditails.imageUrl}`)}/>

            <div className='bottom'>
                <span className='swipe'>LEARN</span><img className='next' src={next}/>
                <span className='swipe'>SHOP</span><img className='next' src={next}/>
            </div>

            
        </div>
    )
}
export default Cars;