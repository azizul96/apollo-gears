const CarDetailsPage = ({ params }: { params: { carID: string } }) => {
  return (
    <div>
      Car Number {params.carID}
      <h1>Car Details Page</h1>
    </div>
  );
};

export default CarDetailsPage;
