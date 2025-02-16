import { useEffect, useState } from "react";
import { getApi } from "../../utils/api";
import withErrorApi from "../../hoc/withErrorApi";
import { BASE_URL, LOCATION } from "../../constants/api";

import styles from "./Locations.module.scss";

const Locations = ({setErrorApi}) => {

    const [locations, setLocations] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getLocations = async (url) => {
        const res = await getApi(url);

        if (res) {
            const locList = res.results.map(({id, name, type, dimension, residents}) => {
                return {
                    id,
                    name,
                    type,
                    dimension,
                    residents: residents.length,
                }
            })
            setLocations(locList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getLocations(BASE_URL + LOCATION);
    }, [getLocations]);

    return (
        <div className={styles.container}>
            {
                locations.filter(loc => loc.id <= 3).map(({name}) => (
                    <div>
                        {name}
                    </div>
                ))
            }
        </div>
    );
};

export default withErrorApi(Locations);