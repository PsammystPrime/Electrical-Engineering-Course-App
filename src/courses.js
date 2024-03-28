export const courses = {
  module1: [
    { title: "Module1" },
    [
      {
        Mathematics: [
          { name: "Engineering Mathematics" },
          [
            {
              Algebra: [
                { name: "Algebra" },
                {
                  units: [
                    { heading: "Algebra ", body: "This is an algebra lesson" },
                    { heading: "Indices", body: "This is Indices " },
                    { heading: "Trigonometry", body: "This is trigonometry " },
                  ],
                },
              ],
            },
            {
              Calculus1: {
                heading: "Calculus 1",
                body: "This is Calculus 1 ",
              },
            },
            {
              Trigonometry: {
                heading: "Trigonometry",
                body: "This is trigonometry ",
              },
            },
          ],
        ],
      },
      {
        Principles: [
          { name: "Electrical Principles" },
          {
            Magnetism: {
              heading: "Electromagnetism",
              body: "This is Electromagnetism ",
            },
            Electrostatics: {
              heading: "Electrostatics",
              body: "This is Electrostatics ",
            },
            Transformers: {
              heading: "Transformers",
              body: "This is Transformers ",
            },
          },
        ],
      },
      {
        Analogue: [
          { name: "Analogue Electronics" },
          {
            Thermnionic: [
              {
                heading: "Thermnionic Emission ",
                body: "This is an Thermnionic Emission lesson",
              },
            ],
            Semiconductor: {
              heading: "Semiconductor Theory",
              body: "This is Semiconductor ",
            },
            Power: {
              heading: "Power Supply Unit",
              body: "This is Power Supply Unit ",
            },
          },
        ],
      },
    ],
  ],
};
