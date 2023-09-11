const StarRating: React.FunctionComponent<{rating: number}> = (props) => {
  const filledStars = Math.min(5, Math.max(0, Math.floor(props.rating))); // Округляем рейтинг вниз
  const decimalPart = props.rating - filledStars;

  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };

  const renderDecimalStar = (decimal: number) => {
    const width = Math.round(decimal * 100) + '%';
    return (
      <span style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ position: 'absolute', overflow: 'hidden', width: width }}>
          &#9733;
        </span>
        <span style={{ color: 'transparent' }}>&#9733;</span>
      </span>
    );
  };

  return (
    <div>
      {renderStars(filledStars)}
      {decimalPart > 0 && renderDecimalStar(decimalPart)}
    </div>
  );
};

export default StarRating;
