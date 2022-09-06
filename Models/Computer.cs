namespace PcEstoque.Models
{
    public class Computer
    {
        public Guid Id { get; set; }
        public string Marca { get; set; }
        public string ModeloPlaca { get; set; }
        public long MemoriaRAM { get; set; }
        public long DiscoRigido { get; set; }
        public string Processador { get; set; }
        public decimal VelocidadeProce { get; set; }
    }
}
