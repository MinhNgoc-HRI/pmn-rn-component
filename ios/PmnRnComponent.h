
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPmnRnComponentSpec.h"

@interface PmnRnComponent : NSObject <NativePmnRnComponentSpec>
#else
#import <React/RCTBridgeModule.h>

@interface PmnRnComponent : NSObject <RCTBridgeModule>
#endif

@end
