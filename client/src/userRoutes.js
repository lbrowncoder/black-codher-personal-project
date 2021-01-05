const NurseryDetail = (props) => {
    const { name } = props.nursery;
   
  
    return (
      <>
      <ul>
          <li key={props.key}>
        <Link to={{pathname:`/search/${name}`,
        state:{nurseries:props.nursery},}}>{name}</Link>
        </li>
        </ul>
        </>
    )
      }
  


      const SearchDetails = ({SearchDetails}) => {
        let location = useLocation();
        let {nurseries} = location.state;
        const images = [nurseries.pictures];
      
        useEffect(() => {
          const {nurseries} = location.state
        },[location])