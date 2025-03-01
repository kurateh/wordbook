import { textStyle, viewStyle } from "~/shared/style/utils";

import { sv } from "./index";

describe("sv", () => {
  it("should work with simple stylesheet", () => {
    expect(
      sv({
        base: {
          color: "red",
        },
      })(),
    ).toEqual({ color: "red" });
  });

  it("should work with slots", () => {
    const style = sv({
      slots: {
        base: {
          color: "red",
        },
        button: {
          backgroundColor: "yellow",
        },
      },
    });

    expect(style().base()).toEqual({ color: "red" });
    expect(style().button()).toEqual({ backgroundColor: "yellow" });
  });

  it("should work with variant", () => {
    const styleWithoutSlots = sv({
      base: {
        fontSize: 16,
      },
      variants: {
        color: {
          blue: {
            color: "blue",
          },
          yellow: {
            color: "yellow",
          },
        },
        isDisabled: {
          true: {
            opacity: 0.5,
          },
          false: {
            opacity: 1,
          },
        },
      },
      defaultVariants: {
        color: "blue",
        isDisabled: false,
      },
    });
    expect(styleWithoutSlots()).toEqual({
      fontSize: 16,
      color: "blue",
      opacity: 1,
    });
    expect(styleWithoutSlots({ color: "blue", isDisabled: true })).toEqual({
      fontSize: 16,
      color: "blue",
      opacity: 0.5,
    });
    expect(styleWithoutSlots({ color: "yellow", isDisabled: false })).toEqual({
      fontSize: 16,
      color: "yellow",
      opacity: 1,
    });

    const styleWithSlots = sv({
      slots: {
        base: textStyle({
          fontSize: 16,
        }),
        button: viewStyle({
          padding: 10,
        }),
      },
      variants: {
        color: {
          blue: {
            base: {
              color: "blue",
            },
            button: {
              backgroundColor: "blue",
            },
          },
          yellow: {
            base: {
              color: "yellow",
            },
            button: {
              backgroundColor: "yellow",
            },
          },
        },
      },
      defaultVariants: {
        color: "blue",
      },
    });

    expect(styleWithSlots().base()).toEqual({
      fontSize: 16,
      color: "blue",
    });
    expect(styleWithSlots({ color: "blue" }).base()).toEqual({
      fontSize: 16,
      color: "blue",
    });
    expect(styleWithSlots({ color: "yellow" }).button()).toEqual({
      padding: 10,
      backgroundColor: "yellow",
    });
  });

  it("should work with compound variant", () => {
    const styleWithoutSlots = sv({
      base: {
        fontSize: 16,
      },
      variants: {
        color: {
          blue: {
            color: "blue",
          },
          yellow: {
            color: "yellow",
          },
        },
        isDisabled: {
          true: {
            opacity: 0.5,
          },
          false: {
            opacity: 1,
          },
        },
      },
      compoundVariants: [
        {
          color: "blue",
          isDisabled: true,
          style: {
            backgroundColor: "blue",
          },
        },
        {
          color: "yellow",
          isDisabled: false,
          style: {
            backgroundColor: "yellow",
          },
        },
      ],
      defaultVariants: {
        color: "blue",
        isDisabled: false,
      },
    });

    expect(styleWithoutSlots()).toEqual({
      fontSize: 16,
      color: "blue",
      opacity: 1,
    });
    expect(styleWithoutSlots({ isDisabled: true })).toEqual({
      fontSize: 16,
      color: "blue",
      opacity: 0.5,
      backgroundColor: "blue",
    });
    expect(styleWithoutSlots({ color: "yellow", isDisabled: false })).toEqual({
      fontSize: 16,
      color: "yellow",
      opacity: 1,
      backgroundColor: "yellow",
    });

    const styleWithSlots = sv({
      slots: {
        base: textStyle({
          fontSize: 16,
        }),
        button: viewStyle({
          padding: 10,
        }),
      },
      variants: {
        color: {
          blue: {
            base: {
              color: "blue",
            },
            button: {
              backgroundColor: "blue",
            },
          },
          yellow: {
            base: {
              color: "yellow",
            },
            button: {
              backgroundColor: "yellow",
            },
          },
        },
        isDisabled: {
          true: {
            base: {
              opacity: 0.5,
            },
          },
          false: {
            base: {
              opacity: 1,
            },
          },
        },
      },
      compoundVariants: [
        {
          color: "blue",
          isDisabled: true,
          style: {
            base: {
              backgroundColor: "blue",
            },
            button: {
              backgroundColor: "blue",
            },
          },
        },
        {
          color: "yellow",
          isDisabled: false,
          style: {
            base: {
              backgroundColor: "yellow",
            },
            button: {
              backgroundColor: "red",
            },
          },
        },
      ],
      defaultVariants: {
        color: "blue",
        isDisabled: false,
      },
    });

    expect(styleWithSlots().base()).toEqual({
      fontSize: 16,
      color: "blue",
      opacity: 1,
    });
    expect(styleWithSlots({ isDisabled: true }).base()).toEqual({
      backgroundColor: "blue",
      fontSize: 16,
      color: "blue",
      opacity: 0.5,
    });
    expect(styleWithSlots({ color: "yellow" }).button()).toEqual({
      padding: 10,
      backgroundColor: "red",
    });
  });

  it("should return props", () => {
    const simpleStyle = sv({
      base: {
        color: "red",
      },
    });

    const {
      base,
      slots,
      compoundVariants,
      defaultVariants,
      variantKeys,
      variants,
    } = simpleStyle;

    expect(base).toEqual({ color: "red" });
    expect(slots).toEqual([]);
    expect(compoundVariants).toEqual([]);
    expect(defaultVariants).toEqual({});
    expect(variantKeys).toEqual([]);
    expect(variants).toEqual({});

    const complexStyle = sv({
      slots: {
        base: textStyle({
          fontSize: 16,
        }),
        button: viewStyle({
          padding: 10,
        }),
      },
      variants: {
        color: {
          blue: {
            base: {
              color: "blue",
            },
            button: {
              backgroundColor: "blue",
            },
          },
          yellow: {
            base: {
              color: "yellow",
            },
            button: {
              backgroundColor: "yellow",
            },
          },
        },
      },
      compoundVariants: [
        {
          color: "blue",
          isDisabled: true,
          style: {
            base: {
              backgroundColor: "blue",
            },
            button: {
              backgroundColor: "blue",
            },
          },
        },
        {
          color: "yellow",
          isDisabled: false,
          style: {
            base: {
              backgroundColor: "yellow",
            },
            button: {
              backgroundColor: "red",
            },
          },
        },
      ],
      defaultVariants: {
        color: "blue",
        isDisabled: false,
      },
    });

    const {
      base: baseComplex,
      slots: slotsComplex,
      compoundVariants: compoundVariantsComplex,
      defaultVariants: defaultVariantsComplex,
      variantKeys: variantKeysComplex,
      variants: variantsComplex,
    } = complexStyle;

    expect(baseComplex).toEqual(undefined);
    expect(slotsComplex).toEqual(["base", "button"]);
    expect(compoundVariantsComplex).toEqual([
      {
        color: "blue",
        isDisabled: true,
        style: {
          base: {
            backgroundColor: "blue",
          },
          button: {
            backgroundColor: "blue",
          },
        },
      },
      {
        color: "yellow",
        isDisabled: false,
        style: {
          base: {
            backgroundColor: "yellow",
          },
          button: {
            backgroundColor: "red",
          },
        },
      },
    ]);
    expect(defaultVariantsComplex).toEqual({
      color: "blue",
      isDisabled: false,
    });
    expect(variantKeysComplex).toEqual(["color"]);
    expect(variantsComplex).toEqual({
      color: {
        blue: {
          base: {
            color: "blue",
          },
          button: {
            backgroundColor: "blue",
          },
        },
        yellow: {
          base: {
            color: "yellow",
          },
          button: {
            backgroundColor: "yellow",
          },
        },
      },
    });
  });
});
