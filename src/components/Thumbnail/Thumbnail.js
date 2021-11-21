import './Thumbnail.css';

const thumbnail = (props) => {
    const styles = [props.class, 'thumbnail'];
    const style = styles.join(' ');

    return (
        <div className={style}>
            <a href={props.link} target="_blank" rel="noreferrer"><img width={props.width} height={props.height} src={props.image} alt="ThumbnailImage" /></a>
        </div>
    )

};

export default thumbnail;