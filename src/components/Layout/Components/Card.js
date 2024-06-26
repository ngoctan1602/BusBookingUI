import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = (props) => {
    let location = props.location;
    let src = props.src;
    let price = props.price;
    let content = props.content;
    let type = props.type;
    let name = props.name;
    let intro = props.intro;
    return (


        <>
            {
                type === 'comment'
                    ?

                    <div className='h-[350px] w-[95%] mx-md relative rounded-md flex border-[0.5px] shadow-lg'>
                        <div className="w-1/2 h-full bg-tranparent flex flex-col items-center ">
                            <img src={src} className="h-[120px] w-[120px] my-md rounded-full">
                            </img>
                            <p className="text-txt text-24 font-bold my-md text-center">{name}</p>
                            <p className="text-button text-16 font-bold my-sm">Khoa Công nghệ thông tin</p>
                        </div>
                        <p className="w-1/2 h-full m-md text-16 text-txt " >{content}</p>
                    </div>
                    : type === 'introduce'
                        ?
                        <div className='h-full w-[24%] mx-sm flex  border-[0.5px] shadow-lg rounded-md'>
                            <div className=" h-full w-[20%]  my-sm ml-md">
                                <FontAwesomeIcon icon={src} className="text-txt h-1/2 w-wrapper"></FontAwesomeIcon>
                            </div>
                            <div className="h-full w-[80%] m-sm overflow-hidden">
                                <p className='text-txt font-bold text-16'>
                                    {intro}
                                </p>
                                <p className='text-txt text-16'>{content}</p>
                            </div>
                        </div>
                        :
                        <div className="w-[20%] h-full mx-md cursor-pointer group rounded-md overflow-hidden relative shadow-md">
                            <div className="hidden group-hover:flex bg-txt w-full h-full absolute opacity-70 text-bg text-18 text-center transition duration-2000 ease-in-out items-center justify-center">
                                <Link to='/trip'>
                                    {
                                        type === 'discount'
                                            ?
                                            <p>Xem chi tiết khuyến mãi <br>
                                            </br> {content}</p>
                                            :
                                            <p>Xem thêm chuyến đi <br>
                                            </br> {location}</p>
                                    }
                                </Link>

                            </div>

                            <img src={src} className="w-[100%] h-[50%]">

                            </img>
                            {
                                type === 'discount'
                                    ?
                                    <div className="bg-button h-[50%] flex flex-col justify-center">
                                        <p className="text-center ">
                                            {content}
                                        </p>
                                    </div>
                                    :
                                    <div className="bg-button h-[50%] flex flex-col justify-center">
                                        <p className="text-center ">
                                            {location}
                                        </p>
                                        <p className="text-center">
                                            {price}
                                        </p>
                                    </div>
                            }




                        </div>

            }

        </>
    );
}

export default Card;