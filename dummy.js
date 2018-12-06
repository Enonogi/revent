onInputChange = e => {
  const newEvent = this.state.event;
  newEvent[e.target.name] = e.target.value;
  this.setState({
    event: newEvent
  });
};

<Form onSubmit={this.onFormSubmit}>
  {/* ...form body goes here... */}
  <Button positive type="submit">
    Submit
  </Button>
</Form>;
