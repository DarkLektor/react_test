function ProdImg(props) {
    return (
        <li>
            <a className={props.classN}>
                <img alt="product"
                    onClick={() => props.setActiveItem(props.index)}
                    src={props.src} />
            </a>
        </li>
    )
} 
export default ProdImg;