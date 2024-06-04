import logo from './logo.svg';
import './App.css';
import { Mafs, Coordinates, Transform, Polygon, Theme, useMovablePoint, Vector, Line} from "mafs"

const range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}

//hello
function Vis() {
    const u = useMovablePoint([1,0])
    const v = useMovablePoint([0, 1])
    const o = [0,0]

    const difs = range(-100,100);
    console.log(difs)


    

    
  return (


    <Mafs height={window.innerHeight}>

        <Vector  tip = {u.point}  color={"Red"}/>
        <Vector  tip = {v.point}  />

        <Coordinates.Cartesian />
        
        {u.element}
        {v.element}
        {console.log(u.point, v.point)}


        
        <Line.ThroughPoints point1={o} point2={u.point} />



        {console.log(2 * u.point[0])}

        
        {difs.map(curd => (
            <Line.ThroughPoints point1={[curd * u.point[0], curd * u.point[1]]} point2={[curd * u.point[0] + v.point[0], curd * u.point[1] + v.point[1]]} opacity={0.3}/>
        ))}

        {difs.map(curd => (
            <Line.ThroughPoints point1={[curd * v.point[0], curd * v.point[1]]} point2={[curd * v.point[0] + u.point[0], curd * v.point[1] + u.point[1]]} opacity={0.3}/>
        ))}
        






    </Mafs>

  );
}

export default Vis;