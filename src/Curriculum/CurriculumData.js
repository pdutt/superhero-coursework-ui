import React from 'react';

const Modules = ({ modules }) => {
    let str = "";
    return (
        <div>
            <center><h1>Curriculum</h1></center>
            {modules.map((module) => (
                <div key = {5} className="curr">
                    <div className="curriculum-body">
                        <h5 className="curriculum-id">Curriculum Id: {module.CURRICULUM_ID}</h5>
                       <div >
                            {module.TRANSFER.map(function (transfer, i) {
                                //Get values in TRANSFER arr and iterate
                                const data = Object.values(transfer);
                                const transferKeys = Object.keys(transfer);

                                for(let d=0; d<data.length; d++){
                                    //return <div key={8}>{   }</div>

                                        console.log(transferKeys[d]);
                                        const list = Object.values(data[d]);

                                        //return <h5 className="mod" key={2}>{transferKeys[d]}</h5>

                                    //console.log(list);
                                    for(let g=0; g<list.length;g++){
                                          //console.log(list[g]);
                                          const values = Object.values(list[g]);
                                          const listOfVals = Object.keys(list[g]);

                                          for(let q =0; q<values.length;q++){
                                              console.log(listOfVals[q]);
                                              console.log(values[q]);
                                          }
                                    }
                                }
                            })}

                        </div>
                        <div>
                            {module.MEANING.map(function (meaning, i) {
                                for (let value in meaning) {
                                    //console.log("meaning val:"+value);
                                }
                                return <div key={6}>
                                    <h5>Meaning</h5>
                                    <span>{meaning[i]}</span>
                                </div>
                            })}

                        </div>
                        <div>
                            {module.ACQUISITION.map(function (acquisition, i) {
                                return <div key={7}>
                                    <h5>Acquisition</h5>
                                    <span>{acquisition.LEARNING_TOPIC_1}</span>
                                </div>
                            })}

                        </div>
                        <div>
                            {module.COMMON_MISUNDERSTANDINGS.map(function (common, i) {
                                return <div key={1}>
                                    <h5>Common Misunderstandings</h5>
                                    <span>{common.LEARNING_TOPIC_1}</span>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Modules