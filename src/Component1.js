import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl';
import Calendar from 'react-calendar';
import './Calender.css'
// import  from 'react'

function Component1() {
    let [time,settime]=useState("00:00");
    let [time2,settime2]=useState("00:00");
    let [time3,settime3]=useState("00:00");
    let [time4,settime4]=useState("00:00");
    let [time5,settime5]=useState("00:00");
    let [time6,settime6]=useState("00:00");
    const [value, onChangeCal] = useState(new Date());
    const initialValue=[]
    const [det,setDet]=useState(initialValue)
    
const onChange=(e)=>{
   
    let time= e.target.value;
    let hrs=time.split(":")[0];
    let mins=time.split(":")[1];
    settime(time=parseInt(hrs)+1 + ":" + mins)
    let endTime=parseInt(hrs)+1 + ":" + mins
    // var det={
    //     day:'monday',
    //     startTime:e.target.value,
    //     endTime:endTime
    // }
    // arr.push(det)
    // console.log(arr)
    let copy=[...det];
    copy=[...copy,{day:"monday",startTime:e.target.value,endTime:endTime}];
    setDet(copy);
    console.log(det)

    // setdet(prevState=>{
    //     return{...prevState,arr:{day:'monday',
    //         startTime:e.target.value,
    //         endTime:endTime}}
    // })
    // console.log(arr)
}
const onChange2=(e)=>{
   
    let time= e.target.value;
    let hrs=time.split(":")[0];
    let mins=time.split(":")[1];
    let endTime=parseInt(hrs)+1 + ":" + mins
    settime2(time2=parseInt(hrs)+1 + ":" + mins)
    // var det2={
    //     day:'tuesday',
    //     startTime:e.target.value,
    //     endTime:endTime
    // }
    // arr.push(...arr,det2)
    // console.log(arr)
    let copy=[...det];
    copy=[...copy,{day:"tuesday",startTime:e.target.value,endTime:endTime}];
    setDet(copy);
    console.log(det)
}
const onChange3=(e)=>{
   
    let time= e.target.value;
    let hrs=time.split(":")[0];
    let mins=time.split(":")[1];
    settime3(time3=parseInt(hrs)+1 + ":" + mins)
    let endTime=parseInt(hrs)+1 + ":" + mins
    let copy=[...det];
    copy=[...copy,{day:"wednesday",startTime:e.target.value,endTime:endTime}];
    setDet(copy);
    console.log(det)
}
const onChange4=(e)=>{
   
    let time= e.target.value;
    let hrs=time.split(":")[0];
    let mins=time.split(":")[1];
    let endTime=parseInt(hrs)+1 + ":" + mins
    settime4(time4=parseInt(hrs)+1 + ":" + mins)
    let copy=[...det];
    copy=[...copy,{day:"thursday",startTime:e.target.value,endTime:endTime}];
    setDet(copy);
    console.log(det)
}
const onChange5=(e)=>{
   
    let time= e.target.value;
    let hrs=time.split(":")[0];
    let mins=time.split(":")[1];
    let endTime=parseInt(hrs)+1 + ":" + mins
    settime5(time5=parseInt(hrs)+1 + ":" + mins)
    let copy=[...det];
    copy=[...copy,{day:"friday",startTime:e.target.value,endTime:endTime}];
    setDet(copy);
    console.log(det)
}
const onChange6=(e)=>{
   
    let time= e.target.value;
    let hrs=time.split(":")[0];
    let mins=time.split(":")[1];
    let endTime=parseInt(hrs)+1 + ":" + mins
    settime6(time6=parseInt(hrs)+1 + ":" + mins)
    let copy=[...det];
    copy=[...copy,{day:"saturday",startTime:e.target.value,endTime:endTime}];
    setDet(copy);
    console.log(det)
}

    return (
        <div style={{width:"70%",margin:"auto"}}>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Monday
                    </Form.Label>
                    <Col sm={4}>
                    <Form.Control type="Time" onChange={onChange} placeholder="00:00" />
                    </Col>
                    <Col sm={4}>
                    <Form.Control type="Text" value={time} placeholder="00:00" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Tuesday
                    </Form.Label>
                    <Col sm={4}>
                    <Form.Control type="Time" onChange={onChange2} placeholder="00:00" />
                    </Col>
                     <Col sm={4}>
                    <Form.Control type="Text" value={time2} placeholder="00:00" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Wednesday
                    </Form.Label>
                    <Col sm={4}>
                    <Form.Control type="Time" onChange={onChange3} placeholder="00:00" />
                    </Col>
                     <Col sm={4}>
                    <Form.Control type="Text" value={time3} placeholder="00:00" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Thursday
                    </Form.Label>
                    <Col sm={4}>
                    <Form.Control type="Time" onChange={onChange4} placeholder="00:00"  />
                    </Col>
                     <Col sm={4}>
                    <Form.Control type="Text" value={time4} placeholder="00:00" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Friday
                    </Form.Label>
                    <Col sm={4}>
                    <Form.Control type="Time" onChange={onChange5} placeholder="00:00"  />
                    </Col>
                     <Col sm={4}>
                    <Form.Control type="Text" value={time5}  placeholder="00:00"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Saturday
                    </Form.Label>
                    <Col sm={4}>
                    <Form.Control type="Time" onChange={onChange6} placeholder="00:00"  />
                    </Col>
                     <Col sm={4}>
                    <Form.Control type="Text" value={time6}  placeholder="00:00"  />
                    </Col>
                </Form.Group>
            </Form>
            <Calendar
                onChange={onChangeCal}
                value={value}
            />
        </div>
    )
}

export default Component1
