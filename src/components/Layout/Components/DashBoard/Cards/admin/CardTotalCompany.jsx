import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "antd";
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from "react";
import * as CompanyService from "../../../../../../services/CompanySV"
const CardTotalCompany = () => {

    const [company, setCompany] = useState(0);
    const [rate, setRate] = useState(0);
    const propsNumber = useSpring({
        from: { number: 0 },
        number: company,
        delay: 200,
        config: { duration: 2000 }
    });

    const propsPercent = useSpring({
        from: { number: 0 },
        number: rate,
        delay: 200,
        config: { duration: 2000 }
    });

    useEffect(() => {
        fetchData();
    }, []);
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await CompanyService.StatisticalCompany();
            if (response.isError !== undefined && !response.isError) {
                setCompany(response.data.totalCompany);
                setRate(response.data.rate);
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false)
    };

    return (
        <div className="box-shadow border-bottom blue" >
            <Row>

                <p className="text-16 font-bold text-center" style={{ width: "100%" }}>
                    Tổng tài khoản công ty
                </p>
            </Row>
            {
                !loading &&

                <Row>

                    <p className="text-16 text-center" style={{ width: "100%" }}>
                        +  <animated.span>
                            {propsNumber.number.to(n => n.toFixed(0))}
                        </animated.span>
                    </p>
                </Row>
            }
            {
                !loading &&
                <Row style={{ display: "flex", alignItems: "center" }}>
                    <p className="w-full text-center">
                        {/* Nếu tăng thì dùng up, giảm thì down */}
                        <FontAwesomeIcon icon={faChevronUp} color="#77DD77" />
                        {/* <FontAwesomeIcon icon={faChevronDown} color="#E72929" /> */}
                        <span> </span>
                        <animated.span>
                            {propsPercent.number.to(n => n.toFixed(0))}
                        </animated.span> %
                        Công ty không hoặt động
                    </p>
                </Row>
            }

        </div>
    );
}
export default CardTotalCompany;