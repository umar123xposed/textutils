

export default function Text(props) {


  return (
    <>
    <div className="form-floating">
  <textarea className="form-control" value={props.text} onChange={props.changing} id="floatingTextarea2" style={{"height": "200px", "fontSize":"19px"}}></textarea>
  <button className="btn btn-primary mx-2 my-4" onClick={props.uppercase}>Click to Uppercase</button>
  <button className="btn btn-primary mx-2 my-4" onClick={props.lowercase}>Click to Lowercase</button>
  <button className="btn btn-primary mx-2 my-4" onClick={props.extraspace}>Remove extra spaces</button>
</div>
<div className="container">
          <h2>About your text</h2>
          <span>{props.text.split(/\s+/).filter((e)=>{return e.length!=0}).length} words, {props.text.length} characters</span>
      </div>
      </>
  )
}
